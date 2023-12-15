export default function SocialButtons({ url1, url2, url3 }) {
    return (
        <div className="iconos d-flex justify-content-evenly">
            <div className="rounded-circle border border-dark p-2 mb-2">
                <img src={url1} alt="icono facebook" />
            </div>
            <div className="rounded-circle border border-dark p-2 mb-2">
                <img src={url2} alt="icono github" />
            </div>
            <div className="rounded-circle border border-dark p-2 mb-2">
                <img src={url3} alt="icono linkedin" />
            </div>
        </div>
    )
}
