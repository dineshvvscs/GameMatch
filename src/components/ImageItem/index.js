import './index.css'

const ImageItem = props => {
  const {details, onCheckImageId} = props
  const {id, thumbnailUrl} = details

  const checkImageId = () => {
    onCheckImageId(id)
  }
  return (
    <li className="thumbnailImageContainer">
      <button onClick={checkImageId} className="thumbButton" type="button">
        <img className="thumbnailImage" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
