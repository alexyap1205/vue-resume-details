import Vue from 'vue'
import Vuex from 'vuex'

import db from '../db';

Vue.use(Vuex);

const state = {
    profile: {},
    experiences: []
};

const getters = {
    profileValue: state => {
        return state.profile;
    },
    experiencesValue: state => {
        return state.experiences;
    }
};

const mutations = {
    setProfile: (state, payload) => {
        state.profile = {...payload};
    },
    setExperiences: (state, payload) => {
        state.experiences = [...payload];
    }
};

const actions = {
    getSummaryAsync(context) {
        const summaryDocRef = db.collection('details').doc('summary');
        summaryDocRef.get().then((doc) => {
            if (doc && doc.exists){
                const summary = doc.data();
                console.log(summary);
                context.commit('setProfile', summary)
            }
        }).catch((error) => {
            console.log(error);
        });
    },
    getExperiencesAsync(context){
        const experiencesDocRef = db.collection('details/experiences/experiences');
        experiencesDocRef.get().then((coll) => {

            const experiences = coll.docs.map(elem => {
                return elem.data();
            }).sort((a,b) => {
                return a.start - b.start;
            });

            console.log(experiences);
            context.commit('setExperiences', experiences)
        }).catch((error) => {
            console.log(error);
        });
    }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
