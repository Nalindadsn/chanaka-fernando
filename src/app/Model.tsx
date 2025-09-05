import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function FoodMenu() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">MENU</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-screen overflow-y-auto m-0 p-0">
        <DialogHeader>
          <DialogTitle>Our Menu</DialogTitle>
          <div className="">
            <ul  className="p-3">
              <li className="" >
                <div className="">
                  <div className=" flex items-center gap-3">
                      <Image
                        className="w-[100px] h-[100px]"
                        src="/breakfast.png"
                        alt=""
                        width={200}
                        height={200}
                      />
                    <div>
                      <div>
                                              <h4 className=" text-yellow-500 ">Breakfast</h4>

                        <p>
                          Whether it{`'`}s night-time or a day flight, your client
                          needs to feel energised and fulfilled when they step
                          off the plane at their next destination. Our team will
                          liaise closely with the flight attendants to ensure
                          meals are always served on time ready for your
                          client{`'`}s working day.
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <li className="menuitem cat8 alert alert-warning" data-catid="8">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Croissants
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid35  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Pain Croissant{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£4.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid36  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mini Pain aux Raisin or Mini Plain Croissant{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£2.50 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid37  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chocolate Croissant{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£5.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid38  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Almond Croissant or Glazed Pecan{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£5.50 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat8 alert alert-warning" data-catid="8">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Omelettes
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid39  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Plain Omelette{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£9.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid40  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Spinach Omelette{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid41  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Asparagus and Ham Omelette{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£15.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid42  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Choose Your Own Bespoke Omelette{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat8 alert alert-warning" data-catid="8">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Organic Fresh Cut Fruit Plates
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid43  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Fruit Platter{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£28.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              A Platter of the finest in season organic fruits
                              crafted to delight the eye and the palette{" "}
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat8 alert alert-warning" data-catid="8">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Organic Fresh Squeezed Juice
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid30  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Orange Juice{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£18.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid31  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Green Apple, Ginger and Spinach Juice{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£22.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid32  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Pineapple and Ginger Juice{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£22.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid33  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Kiwi, Apple and Celery Juice{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£22.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid34  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Pomegranate Juice{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£26.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat8 alert alert-warning" data-catid="8">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Organic Yoghurts
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid44  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chia Pudding{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£10.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>with blueberry compote</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid45  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Coconut Yoghurt{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid46  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mango lime &amp; cardamom Yoghurt{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid47  cat8"
                data-catid="8"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Choose from Strawberry , Raspberry , passionfruit,
                              peach or mango Yoghurt{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat3 alert alert-primary" data-catid="3">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/defaultmenuitem.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      Hot Starters &amp; Dumplings
                    </h4>
                    <div> </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <li className="menuitem cat3 alert alert-warning" data-catid="3">
                <h4 className=" p-2 text-yellow-500 mt-5">
                  Hot Starters
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid1  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chicken Satay{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£18.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With Peanut Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid2  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Beef Satay{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£19.50 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With Peanut Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid3  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Crab Cake{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£15.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With&nbsp;Herb Tartare Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid4  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Thai Fish Cake{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£15.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With&nbsp;Herb Tartare Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid5  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chilli Garlic Prawns{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£15.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With&nbsp;Thai Sweet Chilli</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid6  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              3 Flavours Style Tofu Skewer{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£14.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With&nbsp;Chilli Honey</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat3 alert alert-warning" data-catid="3">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Dumplings
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid7  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chicken Dumpling{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With Japanese Dumpling Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid8  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Prawns Dumpling{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With Japanese Dumpling Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid9  cat3"
                data-catid="3"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Vegetable Dumpling{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>With Japanese Dumpling Sauce</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat7 alert alert-primary" data-catid="7">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/defaultmenuitem.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      From The Garden
                    </h4>
                    <div> </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid60  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              3Flavours Style Healthy Green Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              (Green lentils, beetroot, artichoke, young leaf,
                              super seeds)
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid61  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Quinoa &amp; Kale Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              Garden herbs, apricot, diced butternut squash
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid62  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Wakame and Asparagus Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              Fennel, orange, gem lettuce, vine tomatoes, yuzu
                              honey mustard dressing
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid63  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Summer Fennel and Peach Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              With endive&nbsp; pomegranate&nbsp; walnuts &amp;
                              Citrus dressing{" "}
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid64  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Burrata Cheese &amp; Heritage Tomato Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              Green pesto , balsamic dressing
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid65  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Truffle Beef Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with asparagus, garden leaf, olives, orange
                              truffle dressing
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid66  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Grilled Chicken Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              Organic chicken, green beans, artichoke, mint
                              yogurt dressing{" "}
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid67  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Greenland Prawns &amp; Avocado Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with baby gem lettuce , vine tomatoes, radish ,
                              chilli and mango dressing
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid68  cat7"
                data-catid="7"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Halloumi Salad{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              Cucumber, eggs, beans , Roast peppers ,rocket leaf
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat9 alert alert-primary" data-catid="9">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/79_2_6039910ba6b6_o.png"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      Sandwiches
                    </h4>
                    <div>
                      <p>Freshly baked bread with the finest fillings</p>{" "}
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid48  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Roast Chicken Sandwich{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£14.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with organic sweetcorn, truffle &amp; herb mayo on
                              brown bread
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid49  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Smoked Salmon Bagel{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£14.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with&nbsp;dill cream cheese
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid50  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Ham and Cheese Sandwich{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with&nbsp;chutney, on brown bread
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid51  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Grilled Vegetable Sandwich{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with&nbsp;organic hummus and rocket on brown bread
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid52  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Organic Chicken &amp; Avocado Wrap{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid53  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Smoked Duck and Asparagus Wrap{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£14.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>with Cucumber and Harissa Yoghurt</p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid54  cat9"
                data-catid="9"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Tiger Prawn Wrap{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£14.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left">
                          <p>
                            <span style={{ fontWeight: "400" }}>
                              with mango, lettuce &amp; lemon chilli mint
                              yoghurt
                            </span>
                          </p>
                        </span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat6 alert alert-primary" data-catid="6">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/defaultmenuitem.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      Soups
                    </h4>
                    <div> </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid55  cat6"
                data-catid="6"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Lobster Saffron Soup{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid56  cat6"
                data-catid="6"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Miso Tofu Soup{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid57  cat6"
                data-catid="6"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Tom Yum Soup{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid58  cat6"
                data-catid="6"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Clear Chicken Soup{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid59  cat6"
                data-catid="6"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chill Cucumber Mint Soup{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat2 alert alert-primary" data-catid="2">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/defaultmenuitem.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      Grill Menu
                    </h4>
                    <div> </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <li className="menuitem cat2 alert alert-warning" data-catid="2">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  From The Grill
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid16  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Wagyu Beef 160g{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">
                          £140.00{" "}
                        </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid17  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Dry Aged Beef Fillet 220g{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£42.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid18  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Organic Roast Chicken Breast{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£22.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid19  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Ceylon Cinnamon and Coconut Spiced Rack of Lamb{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£38.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid20  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              BBQ Short Rib{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£28.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid21  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Moroccan Style Slow Cooked Lamb Shank{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£32.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid22  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Grilled Cauliflower with Sweet Pepper and Thai
                              Basil{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£18.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat2 alert alert-warning" data-catid="2">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Sauces
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid23  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Truffle Red Wine Sauce{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£12.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid24  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Black Garlic Jus{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid25  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Wild Mushroom Sauce{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£8.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid26  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Peppercorn Sauce{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid27  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Salsa Verde Sauce{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£5.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid28  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Lemongrass and Thyme Jus{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£5.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid29  cat2"
                data-catid="2"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Hollandaise Sauce{" "}
                            </a>
                          </h4>
                        </span>
                        <b className="main-col menu-price menuprice">£6.00 </b>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat1 alert alert-primary" data-catid="1">
                <div className="row">
                  <div className="col-md-2 col-sm-3 col-xs-3">
                    <img
                      className="img-responsive"
                      src="/thumbs/300px/defaultmenuitem.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-9">
                    {" "}
                    <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                      Dessert Menu
                    </h4>
                    <div> </div>
                  </div>
                  <div className="col-md-2 col-sm-3 col-xs-2"></div>
                </div>{" "}
              </li>
              <li className="menuitem cat1 alert alert-warning" data-catid="1">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Mini Desserts
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid10  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mini Salted Caramel Sesame{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid11  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mini Passionfruit Mousse{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid12  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mini Chocolate Cookie Cheesecake{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <li className="menuitem cat1 alert alert-warning" data-catid="1">
                <h4 className="bg-green-950 p-2 text-yellow-500 mt-5">
                  Regular Size Desserts
                </h4>
                <div></div>
              </li>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid13  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Mango and Passion Mousse{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid14  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              Chocolate Cookies Cheesecake{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div
                className="col-md-12 col-xs-12 menuitem allprods prodid15  cat1"
                data-catid="1"
              >
                <div className="padd-right-25">
                  <li className="">
                    <div className="txt text-left">
                      <div className="w-full flex justify-between flex-wrap border-b py-3">
                        <span className="caption">
                          <h4 className="h5 menutitle">
                            <a className="link-hover-line simple-item color-type-2">
                              White and Dark Chocolate{" "}
                            </a>
                          </h4>
                        </span>
                      </div>
                      <div className="simple-text">
                        <span className="text-left"></span>
                        <span style={{ float: "right" }} className=""></span>
                      </div>
                    </div>
                    <div className="empty-sm-10 empty-xs-10"></div>
                  </li>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="clearfix"></div>
            </ul>
          </div>
        </DialogHeader>
        <div className="grid gap-4"></div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default FoodMenu;
