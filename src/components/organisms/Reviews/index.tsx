import React from "react"
import Subheader from "../../molecules/Subheader"
import CardReview from "../../molecules/CardReview"
//styles
import './style.css'


const Reviews: React.FC = () => {
    return (
        <section className="reviews">
            <Subheader>
                Отзывы
            </Subheader>
            <div className="reviews__content">
                <CardReview
                    className={'reviews__card'}
                    type={"vertical"}
                    img={''}
                    review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in nisi faucibus ac. Massa fames enim, nisl aliquam. Pretium et congue urna pharetra est, fames mattis proin. Facilisis arcu sagittis, cras vivamus. Elit orci risus vitae cras aenean viverra ut convallis lacinia. Quam lectus augue tempus viverra viverra urna quam semper arcu. Vitae, nec tempus libero libero quam mauris, adipiscing fusce.'}
                    mark={5}
                    date={'19 сентября 2019'}
                    name={'Михаил'}
                />
                <CardReview
                    className={'reviews__card'}
                    img={''}
                    review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in nisi faucibus ac. Massa fames enim, nisl aliquam. Pretium et congue urna pharetra est, fames mattis proin. Facilisis arcu sagittis, cras vivamus. Elit orci risus vitae cras aenean viverra ut convallis lacinia. Quam lectus augue tempus viverra viverra urna quam semper arcu. Vitae, nec tempus libero libero quam mauris, adipiscing fusce.'}
                    mark={4}
                    date={'21 сентября 2019'}
                    name={'heheheheh'}
                />
                <CardReview
                    className={'reviews__card'}
                    img={''}
                    review={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in nisi faucibus ac. Massa fames enim, nisl aliquam. Pretium et congue urna pharetra est, fames mattis proin. Facilisis arcu sagittis, cras vivamus. Elit orci risus vitae cras aenean viverra ut convallis lacinia. Quam lectus augue tempus viverra viverra urna quam semper arcu. Vitae, nec tempus libero libero quam mauris, adipiscing fusce.'}
                    mark={4}
                    date={'21 сентября 2019'}
                    name={'heheheheh'}
                />
            </div>
        </section>

    )
};
export default Reviews
