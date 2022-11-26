import { CommentT } from "../../types/comment.type"
import { SeeMore } from "../Reviews/styled";
import { CommentsBlock, CommentsContainer, Divider, NoComments } from "./styles";
import {Comment} from "./Comment";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { useState } from "react";

type Props = {
    comments?:CommentT[],
    seeMore:() => void;
    commentLoading:boolean
}

export const CommentsComponent:React.FC<Props> = ({commentLoading,seeMore,comments}) => {

    console.log("cd",comments)
    return <CommentsBlock>
        <Divider/>
        <CommentsContainer>
            {commentLoading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
            {(!commentLoading && !!comments?.length) && comments?.map(comment => <Comment key={comment.id} comment={comment}/>)}
            {(!commentLoading && !comments?.length) && <NoComments>No comments (</NoComments>}
            {(!commentLoading && !!comments?.length) && <SeeMore onClick={seeMore}>See more</SeeMore>}
        </CommentsContainer>
    </CommentsBlock>
}