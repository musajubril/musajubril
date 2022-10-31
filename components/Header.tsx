import React from 'react'
import { IoFastFood, IoFastFoodSharp, IoFastFoodOutline } from "react-icons/io5"
import { IoIosStarOutline, IoIosStarHalf, IoIosStar, IoIosCode, IoIosCodeWorking } from "react-icons/io"
import { GiDutchBike } from "react-icons/gi"
import { MdOutlineAddShoppingCart } from "react-icons/md"

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className=""><IoIosCodeWorking /></div>
                    <div className="">Musa Jubrilv</div>
                </div>
                <div className="flex items-center">
                    <div className="">Home</div>
                    <div className="">About</div>
                    <div className="">Services</div>
                    <div className="">Menu</div>
                    <div className="">Contact</div>
                    <div className="">Order Now</div>
                </div>
            </div>
        </>
    )
}
// 63A44C