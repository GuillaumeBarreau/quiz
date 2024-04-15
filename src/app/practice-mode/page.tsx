import Categories from '@/components/Categories/Categories.component'
import styles from './page.module.css'
import trainingConfig from '@/training.config.json'
import { ITrainingConfig } from '@/types'
import { ProductCard } from '@/components/_Card'
import { ProductCardSkeleton } from '@/components/_Card/ProductCard/ProductCard.skeleton'

import 'swiper/swiper-bundle.css'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'
import 'swiper/css/effect-fade'

const typedTrainingConfig = trainingConfig as unknown as ITrainingConfig

const Page = async () => {
    return (
        <div className={styles.home_container}>
            <Categories categories={trainingConfig.categoriesList} />
            {trainingConfig?.categoriesList?.map?.((category, index) => {
                return (
                    <div
                        className={styles.catalogueProductsWrapper}
                        key={category}
                    >
                        <h2
                            className={styles.catalogueProductsTitle}
                            id={category}
                        >
                            {category}
                        </h2>
                        <ul className={styles.catalogueProductsItemWrapper}>
                            {typedTrainingConfig.dataConfig?.[category]
                                ?.length > 0
                                ? typedTrainingConfig.dataConfig?.[
                                      category
                                  ]?.map((product, index) => {
                                      return (
                                          <li
                                              key={product?.shortTitle}
                                              className={
                                                  styles.catalogueProductsItem
                                              }
                                          >
                                              <ProductCard
                                                  id={product.shortTitle}
                                                  data={product}
                                              />
                                          </li>
                                      )
                                  })
                                : Array.from({ length: 10 }).map((_, index) => (
                                      <li
                                          key={index}
                                          className={
                                              styles.catalogueProductsItem
                                          }
                                      >
                                          <ProductCardSkeleton />
                                      </li>
                                  ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Page
