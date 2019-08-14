import React from 'react'

class AlbumListItem extends React.PureComponent {
  render() {
    return (
      <li className="album-list-item">{`${this.props.album.id} - ${this.props.album.title}`}</li>
    )
  }
}

export default AlbumListItem
