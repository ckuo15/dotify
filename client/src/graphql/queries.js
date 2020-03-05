import gql from "graphql-tag";

export default {
  FETCH_USERS: gql`
    query FetchUsers{
      users {
        _id
        username
        email
        gender
        dateOfBirth
      }
    }
  `,
  FETCH_USER: gql`
    query fetchUser($id: ID!){
      user(_id: $id){
        _id
        username
        email
        gender
        dateOfBirth
      }
    }
  `,
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  GET_CURRENT_USER: gql`
    query GetCurrentUser {
      username @client
    }
  `,
  FETCH_SONGS: gql`
    query fetchSongs{
      songs{
        _id
        title
        artist
        album
        url
      }
    }
  `,
  FETCH_SONG: gql`
    query fetchSong($id: ID!){
      song(_id: $id){
        _id
        title
        artist
        album
        url
      }
    }
  `,
  FETCH_ARTISTS: gql`
    query fetchArtists{
      artists{
        _id
        name
      }
    }
  `,
  FETCH_ARTIST: gql`
    query fetchArtist($id: ID!){
      artist(_id: $id){
        _id
        name
        albums{
          _id
          name
          genre
          url,
          songs{
            _id
            title
            url
          }
        }
      }
    }
  `,
  FETCH_ALBUMS: gql`
    query fetchAlbums{
      albums{
        _id
        name
        genre
        artist{
          _id
          name
        }
        url
        songs{
          _id
          title
        }
      }
    }
  `,
  FETCH_ALBUM: gql`
    query fetchAlbum($id: ID!){
      album(_id: $id){
        name
        url
        songs {
          _id
          title
          url
        }
        artist{
          _id
          name
        }
      }
    }
  `
}

