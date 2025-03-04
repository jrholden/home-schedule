import jwt from "jsonwebtoken";
import User from '../models/User';

const ensureBasicAuth = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' })
  }
}