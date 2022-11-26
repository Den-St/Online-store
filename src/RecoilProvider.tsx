import { useQuery } from '@apollo/client';
import Cookies from 'js-cookie';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {RecoilRoot} from 'recoil';
import { userState } from './atoms/user.atom';
import { GetMeQuery } from './queries/get-me.query';
import { GetMeInteface } from './types/get-me.inteface';
import { TokenType } from './types/token.type';


const RecoilProvider: React.FC<PropsWithChildren> = ({children}) => {
    const token = Cookies.get("token");
    const {data} = useQuery<GetMeInteface,TokenType>(GetMeQuery,{variables:{token:token}});

  return (
    <RecoilRoot
      initializeState={({set}) => {
        if (token && data?.getMe) return set(userState, {user: data?.getMe,isLoading:false});
      }}>
      {children}
    </RecoilRoot>
  );
};

export default RecoilProvider;