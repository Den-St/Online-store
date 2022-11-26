export const PaginationStyles = `
    .ant-pagination {
        display: flex;
        width: 40%;
        max-width: 700px;
        height: 30px;
        padding: 0;
        justify-content: center;
        gap: 4%;
        align-items: center;
        li::marker {
            font-size: 0;
            display:none;
        }
    }
    .ant-pagination-options {
        display: none;
    }

    .ant-pagination-item{
        font-size: 18px;
        font-family: Helvetica;
        font-weight: 100;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#3e77aa;
        border: 1px solid #a7a7a7;
        width: 4%;
        height: 80%;
        cursor: pointer;
        border-radius: 3px;
        
    }

    .ant-pagination-item:hover{
        transition:0.3s;
        background-color: #57748e1b;
    }

    .ant-pagination-item-active{
        font-size: 18px;
        font-family: Helvetica;
        font-weight: 100;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#3e77aa;
        border: 1px solid #3e77aa;
        width: 4%;
        height: 80%;
        cursor: pointer;
    }

    .ant-pagination-next .ant-pagination-prev {
        font-size: 18px;
        font-family: Helvetica;
        font-weight: 100;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color:#a7a7a7;
        border: 1px solid #3e77aa;
        width: 4%;
        height: 80%;
        cursor: pointer;
    }

    .ant-pagination-item-link{
        height:100%;
        border:none;
        outline:none;
        height:30px;
        border-radius:3px;
        cursor:pointer;
    }
    .ant-pagination-disabled:hover{
        color:black;
    }
    .ant-pagination-item-link:hover{
        color:#f64444;
        transition:0.3s;
    }

`;