import React from 'react'

import './albumlist.css'
import { getAlbums } from '../api'
import AlbumListItem from './AlbumListItem'

class AlbumList extends React.PureComponent {
  state = {
    loading: false,
    albums: [],
  }

  componentWillMount() {
    this.setState({
      loading: true,
    })
  }

  componentDidMount() {
    getAlbums().then(res => {
      this.setState({
        albums: res.data,
        loading: false,
      })
    })
  }

  render() {
    return this.state.loading ? (
      <div>Loading list...</div>
    ) : (
      <div className="album-list">
        <ul>
          {this.state.albums.map(album => (
            <AlbumListItem album={album} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AlbumList
