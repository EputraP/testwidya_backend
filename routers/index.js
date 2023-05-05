import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import {
  AddDevice,
  GetDevice,
  DeleteDevice,
  UpdateDevice,
} from "../controllers/Device.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.post("/addDevice", AddDevice);
router.get("/getDevice", GetDevice);
router.post("/deleteDevice", DeleteDevice);
router.post("/updateDevice", UpdateDevice);

export default router;
