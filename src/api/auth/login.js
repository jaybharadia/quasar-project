import { api } from 'src/boot/plugins/axios'

api.$post('login').then((res) => res.data)
