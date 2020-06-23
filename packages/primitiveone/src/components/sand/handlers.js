
// sk-dev: for further info on creating custom post types and taxonomies in frontity see:
// https://community.frontity.org/t/frontity-release-support-for-custom-post-types-custom-taxonomies/698
// https://community.frontity.org/t/how-do-i-get-all-custom-posts-in-the-list-js-to-work/1105/2

import {getTerm} from "./utils"


// a custom handler for custom post types.
// n.b. just add to frontity.settings, you only need this if you want to modify the data model

const temporalEventsHandler = {
  pattern: "/evolution-of-digital-stuff/",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "temporal_events"
    });

    const _temporalEvents = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isArchive: false,
      isTimelines: false,
      isPostTypeArchive: false,
      isTemporalEventsArchive: true,
      items: _temporalEvents.map(item => ({
        type: item.type,
        id: item.id,
        year: state.source[item.type][item.id].acf.year,
        //taxonomy:  item.taxonomy,
        //name:  item.name,
        //slug:  item.slug,
        link: item.link
      })),
    });
  }


};



const timelinesHandler = {
  
  pattern: "/timelines/",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "timelines"
    });

    const _timelines = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isPostType: false,
      isTaxonomy: true,
      isTimelines: true,
      isTimelineType: false,
      taxonomy: 'timelines',
      
      items: _timelines.map(item => ({
        type: 'temporal_events',
        id: item.id,
        taxonomy:  'timelines',
        link: item.link
      })),

    });
  }
};


/*
  endpoint tests
    ? use wp filter plugin : add custom endpoint to functions.php
  
  url pattern:
    /temporal_events
    ?filter[timelines]&filter[term]=internet
    &[orderby]=year&order=desc

  OK > https://primitive.press/wp-json/wp/v2/temporal_events?[orderby]=year&order=desc
  OK > https://primitive.press/wp-json/wp/v2/temporal_events?[orderby]=year&order=asc

  TO TEST >
  https://primitive.press/wp-json/wp/v2/temporal_events?[orderby]=year&order=asc
  https://primitive.press/wp-json/wp/v2/temporal_events?filter[timelines]&filter[term]=internet

*/

const timelineHandler = {
  pattern: "/evolution-of/:slug",
  func: async ({ route, params, state, libraries }) => {
    //const filterOn = getTerm( route );
    const filterOn = params.slug;
    const sortBy = 'desc';
    const response = await libraries.source.api.get({
      //endpoint: "temporal_events?[orderby]=year&order="+sortBy
      endpoint: "temporal_events?filter[taxonomy]=timelines&filter[term]="+filterOn
      //endpoint: "temporal_events?filter[taxonomy]=timelines&filter[term]="+filterOn+"&[orderby]=year&order="+sortBy
    });

    const _timeline = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {    
      isTaxonomy: true,
      isTimelines: false,
      isTimelineType: true,
      isPostType: false,
      taxType:  params.slug,
      //taxId:  params.slug,

      items: _timeline.map(item => ({
        id: item.id,
        type: item.type,
        //taxonomy:  'timelines',
        year: state.source[item.type][item.id].acf.year,
        tags:  null,
        timelines:  state.source[item.type][item.id].timelines,
        //link: item.link
      })),
    });
  }
};

const worksHandler = {
  pattern: "/works/",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "works"
    });

    const _works = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isWorks: true,
      isPostType: false,
      items: _works.map(item => ({
        type: 'works',
        id: item.id,
        link: item.link
      }))
    });
  }
};

const CustomPageHandlers = [ temporalEventsHandler, timelinesHandler, timelineHandler, worksHandler ]
export default CustomPageHandlers;