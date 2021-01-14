export default function SportCategoriesAnimated (props) {
    return (
        <div className="sportCategories"> 
            <div className={props.animation}></div>
            <p>35%</p>
        </div>
    );
}