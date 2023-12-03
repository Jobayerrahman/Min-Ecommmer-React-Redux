import Skeleton from "./Skeleton";

function SkeletonCard(props) {
    return (
        <div className="productCardWrapper">
            <Skeleton classes="pictute width-100" />
            <div className="flex justify-between">
                <Skeleton classes="title width-30" />
                <Skeleton classes="title width-30" />
            </div>
            <Skeleton classes="button width-100" />
        </div>
    );
}

export default SkeletonCard;