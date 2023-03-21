import BanList from './BanList'

const DiscoverCat = ({ breed, origin, lifeSpan, imageUrl, banList, onBanAttribute }) => {

    return (
        <div>
            <img src={imageUrl} alt={breed} width="400px" height="400px" />
            <div className="buttons">
                <button className="attribute-btns" onClick={() => onBanAttribute(breed)}>{breed}</button>
                <button className="attribute-btns" onClick={() => onBanAttribute(origin)}>{origin}</button>
                <button className="attribute-btns" onClick={() => onBanAttribute(lifeSpan+" years")}>{lifeSpan} years</button>
            </div>
            <BanList banList={banList}/>
        </div>
    )
}

export default DiscoverCat;