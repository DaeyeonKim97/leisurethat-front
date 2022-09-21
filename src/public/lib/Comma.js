const Comma = (int) => {
  return int.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export default Comma
