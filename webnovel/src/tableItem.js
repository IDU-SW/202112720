import React from 'react';
import './App.css';


export const TableItem = ({imagelink,free,dday,pagelink,title,writer,genre,star,des}) => (
 <tr>
    <td><div><img src={imagelink} alt='표지'/></div></td>
    <td class='td_1'><div class='serial'>{free}화 무료</div><div class='dday'>{(dday==99)?'':'D-'+dday}</div></td>
    <td><div><div class='title'><a href={pagelink} target="_blank">{title}</a></div></div>
    <div class='meta_1'>{writer}<span class='meta_2'>, {genre}</span><span class='meta_3'><span class='serial'>, {free}화 무료, </span>
    <span class='dday'>D-{dday}</span></span>, <span class='star'>★{star}</span></div>
    <div class='des'>{des}</div>
    </td>
 </tr>
);