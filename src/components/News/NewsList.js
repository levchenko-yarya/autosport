import News from "./News";
import n from './news.module.css'

const NewsList = (props) => {
    return (
        <div className={n.wrapper}>
            <h2>Новости</h2>
            <News/>
            <News/>
            <News/>
            <News/>
        </div>
    )
}
export default NewsList