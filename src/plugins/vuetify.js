import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            dark:{
                primary:"#FFFFFF",
                error:"#DA1212",
                warning:"#1e1e1e"
            },
            light:{
                primary:"#FFFFFF",
                error:"#DA1212",
                warning:"#1e1e1e"
            }
        }
    }
});
