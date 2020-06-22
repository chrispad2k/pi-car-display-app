import {BleManager, Device} from 'react-native-ble-plx';
import uuid from 'react-native-uuid';

export const manager = new BleManager();
export let device: Device | null = null;

export const scanAndConnect = () => {
  manager.startDeviceScan(null, null, (error, scannedDevice) => {
    if (error || !scannedDevice) {
      return;
    }

    if (scannedDevice.name !== 'PiCarDisplay') {
      return;
    }

    manager.stopDeviceScan();
    device = scannedDevice;

    device.connect().then((d) => {
      console.log('Services');
      console.log(d.serviceUUIDs);
      console.log('Name');
      console.log(d.name);
      return d.discoverAllServicesAndCharacteristics();
    });
  });
};

export const sendMessage = (message: string): void => {
  device?.writeCharacteristicWithoutResponseForService(
    uuid.v4(),
    uuid.v4(),
    message,
  );
};
