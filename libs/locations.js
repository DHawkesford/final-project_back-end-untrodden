const locations = [
    {
        location_name: "Solomon's Tower",
        street: "Green Lane",
        town: "Buxton",
        region: "Derbyshire",
        postcode: "SK17 9DH",
        location_description: "Solomon's Temple, also known as Grin Low Tower, is a Victorian fortified hill marker at the summit of Grin Low Hill near the spa town of Buxton. At 439 metres above sea-level, the views from the top of this modest tower are not-to-be-missed and on a clear day it's possible to see Mam Tor in Castleton and Kinder Scout - the highest point in the Peak District!",
        category_seaside: false,
        category_castles: true,
        category_caves: false,
        category_peaceful: true,
        category_hiking: true,
        category_hills: true,
        category_historic: true,
        category_secluded: true,
        category_casual: true,
        category_lakes: false,
        category_busy: false,
        category_woods: true,
        amenities_parking: true,
        amenities_food: false,
        amenities_family: true,
        amenities_changing_facilities: false,
        amenities_disability_access: false,
        amenities_peaceful: true,
        amenities_electric_charging: false,
        amenities_no_restaurants: true,
        amenities_museums: false,
        amenities_beach: false,
        amenities_hiking: true,
        amenities_pet_friendly: true,
        amenities_forests: true,
        amenities_lots_of_wildlife: true,
        amenities_watersports: false,
        amenities_shopping: false,
        amenities_bodies_of_water: false,
        amenities_camping: false,
        amenities_mountains: false,
        amenities_hearing_loop: false,
        amenities_public_transport_good: true,
        amenities_public_transport_bad: false,
        amenities_accommodation: false,
        amenities_wifi: false,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Solomons_Temple.jpg",
        latitude: 53.242709,
        longitude: -1.920569
        
    },
    {
        location_name: "Marchmont Community Garden",
        street: "Marchmont Street",
        town: "London",
        region: "Greater London",
        postcode: "WC1N 1NJ",
        location_description: "This is a pocket park in Bloomsbury next to the Brunswick Centre that was once a private garden and fenced off, but just over a decade ago was opened up as a public space.",
        category_seaside: false,
        category_castles: false,
        category_caves: false,
        category_peaceful: true,
        category_hiking: false,
        category_hills: false,
        category_historic: false,
        category_secluded: true,
        category_casual: true,
        category_lakes: false,
        category_busy: false,
        category_woods: false,
        amenities_parking: false,
        amenities_food: true,
        amenities_family: true,
        amenities_changing_facilities: false,
        amenities_disability_access: true,
        amenities_peaceful: true,
        amenities_electric_charging: false,
        amenities_no_restaurants: false,
        amenities_museums: false,
        amenities_beach: false,
        amenities_hiking: false,
        amenities_pet_friendly: true,
        amenities_forests: false,
        amenities_lots_of_wildlife: false,
        amenities_watersports: false,
        amenities_shopping: true,
        amenities_bodies_of_water: false,
        amenities_camping: false,
        amenities_mountains: false,
        amenities_hearing_loop: false,
        amenities_public_transport_good: true,
        amenities_public_transport_bad: false,
        amenities_accommodation: false,
        amenities_wifi: false,
        image_url: "https://www.ianvisits.co.uk/articles/wp-content/uploads/2022/07/Marchmont-Community-Garden-05.jpg",
        latitude: 51.525098,
        longitude: -0.124815
    },
    {
        location_name: "Harborne Walkway",
        street: "Harborne Walkway",
        town: "Birmingham",
        region: "West Midlands",
        postcode: "B16 0SL",
        location_description: "The Harborne Walkway is a 1.5 mile stretch which runs from Forest Drive and Park Hill Road Harborne entrances to Summerfield Park. It is a linear park and the responsibility of the Council Parks Department. It passes by allotments and the Harborne Bird Sanctuary following the old railway line. It’s a nice atmospheric stroll with shady woodland, embankments, wide verges and across or under 6 bridges. The path is well surfaced and forms part of an easy route, safe for cyclists and walkers, which carries on into Summerfield Park.",
        category_seaside: false,
        category_castles: false,
        category_caves: false,
        category_peaceful: true,
        category_hiking: true,
        category_hills: false,
        category_historic: false,
        category_secluded: true,
        category_casual: true,
        category_lakes: false,
        category_busy: false,
        category_woods: true,
        amenities_parking: false,
        amenities_food: false,
        amenities_family: true,
        amenities_changing_facilities: false,
        amenities_disability_access: true,
        amenities_peaceful: true,
        amenities_electric_charging: false,
        amenities_no_restaurants: true,
        amenities_museums: false,
        amenities_beach: false,
        amenities_hiking: true,
        amenities_pet_friendly: true,
        amenities_forests: true,
        amenities_lots_of_wildlife: true,
        amenities_watersports: false,
        amenities_shopping: false,
        amenities_bodies_of_water: false,
        amenities_camping: false,
        amenities_mountains: false,
        amenities_hearing_loop: false,
        amenities_public_transport_good: true,
        amenities_public_transport_bad: false,
        amenities_accommodation: false,
        amenities_wifi: false,
        image_url: "https://bosf.org.uk/wp-content/gallery/seasons-on-the-walkway/FoHW-Spring.jpg",
        latitude: 52.481151,
        longitude: -1.943754
    },
    {
        location_name: "Horgabost Beach",
        street: "Horgabost",
        town: "Isle of Harris",
        region: "Scottish Highlands and Western Isles",
        postcode: "HS3 3HR",
        location_description: "Horgabost is yet another stunning white sandy Hebridean beach. Located on South Harris, this beach is just around the corner from better known Luskentyre beach. Horgabost shares the same crystal clear green blue water and pristine sands but is slightly more sheltered. The beach looks straight out over the Sound of Taransay with the mountains beyond forming a spectacular backdrop. It is from Horgabost that you can take a boat trip out into the sound. Like other Harris Isle beaches the meadows leading down to the coast become carpeted in wildflowers during the summer months. This is known as ‘machair’ locally. Whilst there are no facilities on the beach per se, there is a campsite within a stone’s throw with a shop and toilets.",
        category_seaside: true,
        category_castles: false,
        category_caves: false,
        category_peaceful: true,
        category_hiking: false,
        category_hills: false,
        category_historic: false,
        category_secluded: true,
        category_casual: true,
        category_lakes: false,
        category_busy: false,
        category_woods: false,
        amenities_parking: true,
        amenities_food: false,
        amenities_family: true,
        amenities_changing_facilities: false,
        amenities_disability_access: false,
        amenities_peaceful: false,
        amenities_electric_charging: false,
        amenities_no_restaurants: true,
        amenities_museums: false,
        amenities_beach: true,
        amenities_hiking: false,
        amenities_pet_friendly: true,
        amenities_forests: false,
        amenities_lots_of_wildlife: false,
        amenities_watersports: false,
        amenities_shopping: false,
        amenities_bodies_of_water: false,
        amenities_camping: false,
        amenities_mountains: false,
        amenities_hearing_loop: false,
        amenities_public_transport_good: false,
        amenities_public_transport_bad: true,
        amenities_accommodation: false,
        amenities_wifi: false,
        image_url: "https://www.hebrideanhopscotch.com/outer-hebrides/wp-content/uploads/2014/05/H0039-768x514.jpg",
        latitude: 57.86451376037841,
        longitude: -6.985501206854588
    },
    {
        location_name: "Radnor Castle Mound",
        street: "11 High St, New Radnor",
        town: "Presteigne",
        region: "Mid Wales",
        postcode: "LD8 2SL",
        location_description: "An old castle mound in the Welsh hills. Radnor (Welsh: Maesyfed) is a village in Powys, Wales, to the south of Radnor Forest, and was the county town of Radnorshire. Attractions in the town include a significant castle [1] mound of a Norman motte [2]. New Radnor castle was originally called Trefaesyfed and was once a considerable fortress and a significant border castle in the Welsh Marches and played its part in the turmoil, violence and barbarity of the early medieval period typical of such a site.",
        category_seaside: false,
        category_castles: true,
        category_caves: false,
        category_peaceful: false,
        category_hiking: false,
        category_hills: false,
        category_historic: false,
        category_secluded: false,
        category_casual: false,
        category_lakes: false,
        category_busy: false,
        category_woods: false,
        amenities_parking: true,
        amenities_food: false,
        amenities_family: true,
        amenities_changing_facilities: false,
        amenities_disability_access: false,
        amenities_peaceful: true,
        amenities_electric_charging: false,
        amenities_no_restaurants: true,
        amenities_museums: false,
        amenities_beach: false,
        amenities_hiking: true,
        amenities_pet_friendly: true,
        amenities_forests: false,
        amenities_lots_of_wildlife: false,
        amenities_watersports: false,
        amenities_shopping: false,
        amenities_bodies_of_water: false,
        amenities_camping: false,
        amenities_mountains: false,
        amenities_hearing_loop: false,
        amenities_public_transport_good: false,
        amenities_public_transport_bad: true,
        amenities_accommodation: false,
        amenities_wifi: false,
        image_url: "http://www.ecastles.co.uk/newradnor960a.jpg",
        latitude: 52.24158189495012,
        longitude: -3.1556172471674757
        
    },
]

export default locations;