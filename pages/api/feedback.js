const feedback = (req, res) => {
  res.status(200).json({
    message: "this is feedback router",
  });
};

export default feedback;
