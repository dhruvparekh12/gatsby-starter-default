export default function handler(req, res) {
  console.log('Runtime Node Version: ', process.version);

  res
    .status(200)
    .json({
      key: "val"
    })
}
