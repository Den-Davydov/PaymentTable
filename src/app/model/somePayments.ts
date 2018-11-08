import { Payment } from "./payment";

export const PAYMENTS: Payment[] = [
  { title: "Интернет", cost: 600,items:[{checked:true,id:0},
    {checked:true,id:1},{checked:false,id:2},{checked:false,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}] },
  { title: "Домашний телефон", cost: 500,items:[{checked:false,id:0},
    {checked:false,id:1},{checked:false,id:2},{checked:false,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}]},
  { title: "Мобильный телефон", cost: 300,items:[{checked:true,id:0},
    {checked:true,id:1},{checked:true,id:2},{checked:false,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}] },
  { title: "IPTV", cost: 200,items: [{checked:false,id:0},
    {checked:false,id:1},{checked:true,id:2},{checked:true,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}]},
  { title: "Подписка на музыку", cost: 150,items:[{checked:false,id:0},
    {checked:false,id:1},{checked:true,id:2},{checked:true,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}] },
  { title: "Подписка на фильмы", cost: 150,items: [{checked:false,id:0},
    {checked:false,id:1},{checked:true,id:2},{checked:true,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}]},
  { title: "Абонемент на фитнес", cost: 1000,items:[{checked:false,id:0},
    {checked:false,id:1},{checked:false,id:2},{checked:true,id:3},{checked:false,id:4},{checked:false,id:5},{checked:false,id:6},
    {checked:false,id:7},{checked:false,id:8},{checked:false,id:9},{checked:false,id:10},{checked:false,id:11}] }
];