import React from 'react'
import {OrderedComponent} from '../../components/Cabinet/Ordered'
import { useReceipts } from '../../hooks/receipts.hook';
import { CabinetLayout } from './CabinetLayout'

export const Ordered = () => {
    const {receipts,loading} = useReceipts();

    return <CabinetLayout>
        <OrderedComponent loading={loading} receipts={receipts}/>
    </CabinetLayout>
}
