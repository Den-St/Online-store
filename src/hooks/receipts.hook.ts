import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { GetAllReceiptsQuery } from './../queries/get-all-receipts-by-user-id.query';
import { ReceiptT } from './../types/receipt.type';
import { useQuery } from '@apollo/client';

export const useReceipts = () => {
    const user = useRecoilValue(userState);
    const {data,loading} = useQuery<{getAllReceiptsByUserId:ReceiptT[]},{userId?:number}>(GetAllReceiptsQuery,{variables:{userId:user.user.id},nextFetchPolicy: "cache-and-network"});

    return {receipts:data?.getAllReceiptsByUserId,loading};
}