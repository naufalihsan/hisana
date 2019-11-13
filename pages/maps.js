import MapsPages from '../src/components/default/maps'
import SideMenuMaps from '../src/components/menu/maps'
import ComponentMaps from '../src/components/maps/maps'
import { AUTHORIZATION, API_HISANA } from '../src/constants'

const Maps = props => {
    console.log("DATA MAPS", props.data)
    return (
        <MapsPages
            menu={
                <SideMenuMaps title={props.area} />
            }
            area={props.area}
            page={
                <ComponentMaps {...props} />
            }
        />
    );
}

Maps.getInitialProps = async function ( { query: { location } } ) {
    const area = location? location : 'Bekasi'
    console.log("AREAS", area)

    const res = await fetch(API_HISANA + "detail/district/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ name: 'Bintara Jaya'})
    });
    const message = await res.json();
    return {
        data: message.data,
        area: area
    };
};

export default Maps
