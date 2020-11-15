//Import a Library to help create a component
import React, { Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create a Component
class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
      return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

//Make the Component available to other parts of the App.
export default AlbumList;
