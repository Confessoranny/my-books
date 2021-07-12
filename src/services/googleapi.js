import { GOOGLE_API_URL } from './../config/constants'

const getUrl = book => {
    fetch(`${GOOGLE_API_URL}/${book}`).then(res => res.json())
}