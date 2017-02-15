module.exports = app => (err, req, res) => {
  console.log('app: ', app);
  const message = err.message;
  const error = app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ message, error });
};
