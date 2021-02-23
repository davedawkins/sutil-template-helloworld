module App

open Sutil
open Sutil.DOM
open Sutil.Attr

let view() =
    Html.div [
        style [
            Css.fontFamily "Arial, Helvetica, sans-serif"
            Css.textAlign "center"
            Css.marginTop "40px"
            Css.fontSize "10ex"
        ]
        text "Hello World"
    ]

view() |> mountElement "sutil-app"