import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi';


const darkProTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#BDBDBD",
    primary: "#009688",
    secondary: "#009688",
    'primary-darken-1': "#00796B"
  }
}


const vuetify = createVuetify({
  components,
  directives,
  theme:{ 
    defaultTheme: "darkProTheme",
    themes: {
      darkProTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

export default vuetify
