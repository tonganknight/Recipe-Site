import {App} from '../../../Enums/index';
import './banner-title.css'

const BannerTitle = () => {
    return <div className="banner-title">{App.name}</div>
}

export default BannerTitle;