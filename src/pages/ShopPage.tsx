/* eslint-disable */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchAllShops } from '../store/features/product/shopSlice';
import { Meta } from "../components/Meta";
import ShopCard from '../components/product/ShopCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../assets/styles/ShopPage.scss';

const ShopPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shops, isLoadingShops, isErrorShops, isSuccessShops } = useAppSelector((state) => state.shop);

  useEffect(() => {
    dispatch(fetchAllShops());
  }, [dispatch]);

  return (
    <>
      <Meta title="Shops - E-Commerce Ninjas" />
      <div className="shop-container">
        {isLoadingShops ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="shop-card">
              <Skeleton height={200} />
              <Skeleton count={3} />
            </div>
          ))
        ) : isErrorShops ? (
          <p>Something went wrong. Please try again later.</p>
        ) : isSuccessShops && shops && shops.length > 0 ? (
          shops.map((shop) => (
            <ShopCard key={shop.id} shopId={shop.id} />
          ))
        ) : (
          <p>No shops available</p>
        )}
      </div>
    </>
  );
};

export default ShopPage;