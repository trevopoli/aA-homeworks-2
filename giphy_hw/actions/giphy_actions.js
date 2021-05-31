import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';

export const receiveSearchGiphys = giphys => ({
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
});

export const fetchSearchGiphys = seatchTerm => dispatch => {
    APIUtil.fetchSearchGiphys(seatchTerm).then(
        giphys => dispatch(receiveSearchGiphys(giphys.data))
    )
};