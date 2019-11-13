import MapsPages from '../../../src/components/default/maps'
import SideMenuDetailsArea from '../../../src/components/menu/details-area'
import ComponentMaps from '../../../src/components/maps/maps'
import fetch from "isomorphic-unfetch";
import { AUTHORIZATION, API_HISANA } from '../../../src/constants';


const DetailArea = props => {
    return (
        <MapsPages menu={<SideMenuDetailsArea
            area={props.area}
            title={props.subdistrict.name}
            kecamatan={props.subdistrict.district}
            luas={props.subdistrict.area_size}
            populasi={props.subdistrict.population}
            kpdtpenduduk={props.subdistrict.density}
            kcptnjalan={props.subdistrict.road_speed}
            coverage={props.subdistrict.coverage_status}
            marketshare={props.marketshare}
            marketpotential={props.marketpotential}/>}
            area={props.locationName}
            page={
                <ComponentMaps
                    {...props}
                />
            }
        />
    );
}


DetailArea.getInitialProps = async function ({ query: { location, area } }) {
    const res = await fetch(API_HISANA + "detail/district/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTHORIZATION
        },
        body: JSON.stringify({ name: location })
    });
    const message = await res.json();

    return {
        subdistrict: message.subdistrict,
        data: message.data,
        marketshare: message.ms,
        marketpotential: message.mp,
        locationName: location,
        area: area
    };
};

export default DetailArea