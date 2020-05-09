
// sk-dev: for further info on creating custom post types and taxonomies in frontity see:
// https://community.frontity.org/t/frontity-release-support-for-custom-post-types-custom-taxonomies/698
// https://community.frontity.org/t/how-do-i-get-all-custom-posts-in-the-list-js-to-work/1105/2

import {getTerm} from "./utils"

const timelinesHandler = {
  
  pattern: "/timelines/",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "timelines"
    });

    const _timelines = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isTaxonomy: true,
      isTimelines: true,
      isPostType: false,
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

OK > https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events?[orderby]=year&order=desc
OK > https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events?[orderby]=year&order=asc

TO TEST >
https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events?[orderby]=year&order=asc
https://wp.primitivedigital.uk/wp-json/wp/v2/temporal_events?filter[timelines]&filter[term]=internet

*/

const timelineHandler = {
  pattern: "/evolution-of/:slug",
  func: async ({ route, params, state, libraries }) => {
    //const filterOn = getTerm( route );
    const filterOn = params.slug;
    const sortBy = 'desc';
    console.log("_state", state);
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
      items: _timeline.map(item => ({
        id: item.id,
        type: 'temporal_events',
        taxonomy:  'timelines',
        tags:  null,
        taxonomies:  null,
        link: item.link
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

const servicesHandler = {
  pattern: "/services/",
  func: async ({ route, params, state, libraries }) => {
    const response = await libraries.source.api.get({
      endpoint: "services?_embed"
    });

    const services = await libraries.source.populate({ response, state });

    Object.assign(state.source.data[route], {
      isServices: true,
      isPostType: false,
      items: services.map(item => ({
        type: 'services',
        id: item.id,
        link: item.link
      }))
    });
  }
};


const CustomPageHandlers = [ timelinesHandler, timelineHandler, worksHandler ]
export default CustomPageHandlers;