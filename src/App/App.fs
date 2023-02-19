module App

open Sutil
open Sutil.DomHelpers
open Feliz
open type Feliz.length

let view() =
    Html.div [
        Attr.style [
            Css.fontFamily "Arial, Helvetica, sans-serif"
            Css.textAlignCenter
            Css.marginTop (px 40)
            Css.fontSize (ex 10)
        ]
        text "Hello World"
    ]

view() |> Program.mount
