import Device from "../models/DeviceModel.js";

export const AddDevice = async (req, res) => {
  const { client, serialNumber, amount } = req.body;
  try {
    await Device.create({
      client: client,
      serial_number: serialNumber,
      amount: amount,
    });
    res.json({ msg: "Add Device Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateDevice = async (req, res) => {
  const { client, serialNumber, amount } = req.body;
  try {
    await Device.post({
      client: client,
      serial_number: serialNumber,
      amount: amount,
    });
    res.json({ msg: "Update Device Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const GetDevice = async (req, res) => {
  try {
    const device = await Device.findAll();
    console.log(device);
    res.json(device);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteDevice = async (req, res) => {
  const { client, serialNumber, amount } = req.body;
  try {
    const device = await Device.destroy({
      where: {
        client: client,
        serial_number: serialNumber,
        amount: amount,
      },
    });
    console.log(device);
    res.json(device);
  } catch (error) {
    console.log(error);
  }
};
