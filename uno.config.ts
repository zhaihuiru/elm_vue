import {defineConfig, presetUno} from 'unocss'

export default defineConfig({
    presets: [presetUno()],
    theme: {
        colors: {
            primary: '#17BAF9',
            secondary: '#FEEDC1',
            third: '#644F1B',
        },
    },
})