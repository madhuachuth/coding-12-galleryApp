// Write your code here.
import './index.css'

const Thumbnail = props => {
  const {content, getSelectedImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = content

  const onClickSelectedImage = () => {
    getSelectedImage(id)
  }

  const selectedItem = isActive ? 'selected' : ''

  return (
    <li>
      <button onClick={onClickSelectedImage} type="button">
        <img
          className={`image ${selectedItem}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnail
