const { Console } = require('console');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.header('Authorization');
 
  if (!token) return res.status(401).json({ error: 'No token provided' });
  if (token.startsWith('Bearer ')) token = token.slice(7);
  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};
