import { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { MAPS_APIKEY } from '../../constants'
import { connect } from 'react-redux'
import { ICON_HISANA, ICON_COMPETITOR, ICON_PUBLIC, ICON_NONCOMPETITOR, ICON_NONFACTORPUBLIC, ICON_RECOMMEND } from '../../constants'
import Link from '@material-ui/core/Link';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: props.data,
      center: null,
      icon: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  setCenter = () => {
    if (this.props.data.public.length > 0) {
      this.state.center = this.props.data.public[0].location
    } else if (this.props.data.hisana.length > 0) {
      this.state.center = this.props.data.hisana[0].location
    } else if (this.props.data.competitor.length > 0) {
      this.state.center = this.props.data.competitor[0].location
    } else if (this.props.data.non_competitor.length > 0) {
      this.state.center = this.props.data.non_competitor[0].location
    } else if (this.props.data.non_public.length > 0) {
      this.state.center = this.props.data.non_public[0].location
    } else if (this.props.data.recommended.length > 0) {
      this.state.center = this.props.data.recommended[0].location
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  checkState = (val) => {
    if (val === 'hisana') {
      this.state.icon = ICON_HISANA
      return this.state.stores.hisana
    } else if (val === 'public') {
      this.state.icon = ICON_PUBLIC
      return this.state.stores.public
    } else if (val === 'competitor') {
      this.state.icon = ICON_COMPETITOR
      return this.state.stores.competitor
    } else if (val === 'nonCompetitor') {
      this.state.icon = ICON_NONCOMPETITOR
      return this.state.stores.non_competitor
    } else if (val === 'nonFactorPublic') {
      this.state.icon = ICON_NONFACTORPUBLIC
      return this.state.stores.non_public
    } else if (val === 'recommended') {
      this.state.icon = ICON_RECOMMEND
      return this.state.stores.recommended
    }
  }

  displayInfoWindow = (val) => {
    var currentState = this.checkState(val)

    return currentState.map((store, index) => {
      return <InfoWindow
        key={index}
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div style={{ maxWidth: 250 }}>
          <h4>{this.state.selectedPlace.name}</h4>
          <h5>{this.state.selectedPlace.notes}</h5>
          <h5>{this.state.selectedPlace.address}</h5>
          <Link href={this.state.selectedPlace.street_view}>
            <h5>Street view: {this.state.selectedPlace.street_view}</h5>
          </Link>
        </div>
      </InfoWindow>
    })
  }

  displayMarkers = (val) => {
    var currentState = this.checkState(val)
    return currentState.map((store, index) => {
      return <Marker
        icon={{
          url: this.state.icon,
          anchor: new google.maps.Point(16, 16),
          scaledSize: new google.maps.Size(32, 32)
        }}
        key={index} id={index}
        name={store.name}
        address={store.address}
        notes={store.notes}
        street_view={store.street_view}
        position={{
          lat: store.location.lat,
          lng: store.location.lng
        }} onClick={this.onMarkerClick} />
    })
  }


  render() {
    this.setCenter()

    const { center } = this.state

    let marker, marker2, marker3, marker4, marker5, marker6
    let infoMarker, infoMarker2, infoMarker3, infoMarker4, infoMarker5, infoMarker6

    if (this.props.fetch.hisanaStatus) {
      marker = this.displayMarkers("hisana")
      infoMarker = this.displayInfoWindow("hisana")
    }
    if (this.props.fetch.publicStatus) {
      marker2 = this.displayMarkers("public")
      infoMarker2 = this.displayInfoWindow("public")
    }
    if (this.props.fetch.competitorStatus) {
      marker3 = this.displayMarkers("competitor")
      infoMarker3 = this.displayInfoWindow("competitor")
    }
    if (this.props.fetch.nonCompetitorStatus) {
      marker4 = this.displayMarkers("nonCompetitor")
      infoMarker4 = this.displayInfoWindow("nonCompetitor")
    }
    if (this.props.fetch.nonFactorPublicStatus) {
      marker5 = this.displayMarkers("nonFactorPublic")
      infoMarker5 = this.displayInfoWindow("nonFactorPublic")
    }
    if (this.props.fetch.recommendStatus) {
      marker6 = this.displayMarkers("recommended")
      infoMarker6 = this.displayInfoWindow("recommended")
    }

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: center.lat, lng: center.lng }}
      >
        {marker}
        {infoMarker}
        {marker2}
        {infoMarker2}
        {marker3}
        {infoMarker3}
        {marker4}
        {infoMarker4}
        {marker5}
        {infoMarker5}
        {marker6}
        {infoMarker6}
      </Map>
    );
  }
}


const mapStateToProps = state => {
  return {
    fetch: state
  }
}

export default connect(mapStateToProps, null)(GoogleApiWrapper({ apiKey: MAPS_APIKEY })(MapContainer));
