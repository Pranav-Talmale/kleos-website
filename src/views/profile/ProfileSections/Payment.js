import { useEffect } from "react";
import {
  usePaymentVerificationMutation,
  useCheckoutMutation,
} from "slices/paymentApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "slices/usersApiSlice";
import { setCredentials } from "slices/authSlice";
import { toast } from "react-toastify";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Payment() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateUserMutation();
  const [checkout] = useCheckoutMutation();
  const [verifyPayment] = usePaymentVerificationMutation();

  //Fetch Data From The Server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await updateProfile({
          load: "",
        }).unwrap();
        //console.log(res);
        dispatch(setCredentials(res));
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    };

    fetchData();
  }, [dispatch, updateProfile]);

  const checkoutHandler = async () => {
    try {
      const result = await checkout({
        amount: "100",
      }).unwrap();

      const options = {
        key: "rzp_test_DAALyOorgRDSJ0",
        amount: result.order.amount,
        currency: "INR",
        name: "Kleos",
        description: "Hackathon By RAIT ACM",
        order_id: result.order.id,
        handler: function (response) {
          verifyPayment({
            _id: userInfo._id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          }).unwrap();
          toast.success("Payment Completed");
          //alert(response.razorpay_payment_id);
          //alert(response.razorpay_order_id);
          //alert(response.razorpay_signature)
        },
        prefill: {
          name: userInfo.member1Name,
          email: userInfo.member1Email,
          contact: userInfo.member1Number,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        toast.error(response.error.code);
        //alert(response.error.code);
        //alert(response.error.description);
        //alert(response.error.source);
        //alert(response.error.step);
        //alert(response.error.reason);
        //alert(response.error.metadata.order_id);
        //alert(response.error.metadata.payment_id);
      });
      rzp1.open();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col md="5">
              <h1 className="profile-title text-left">Payment</h1>
              <h5 className="text-on-back">03</h5>
              <p className="profile-description text-left">
                1. To confirm registration, the team needs to make a small
                payment of ₹100.
                <br />
                <br />
                2. Failing to do so will result in disqualification. Payment
                should be made before the last registration date. Late payment
                will not be taken into account.
                <br />
                <br />
              </p>
              <div className="btn-wrapper pt-3">
                {userInfo.paymentComplete === true ? (
                  <>
                    <Button
                      className="btn-round float-left"
                      color="success"
                      data-placement="right"
                      type="button"
                      disabled={true}
                    >
                      <i className="tim-icons icon-check-2" /> Payment Complete
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="btn-round float-left"
                      color="primary"
                      data-placement="right"
                      onClick={checkoutHandler}
                      type="button"
                    >
                      Pay
                    </Button>
                  </>
                )}

                {/*<Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>*/}
              </div>
            </Col>
            <Col className="ml-auto" md="4">
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-square-pin" />
                </div>
                <div className="description">
                  <h4 className="info-title">Find us at our college</h4>
                  <p>
                    Ramrao Adik Institute Of Technology, <br />
                    Nerul, Navi Mumbai.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-mobile" />
                </div>
                <div className="description">
                  <h4 className="info-title">Give us a ring</h4>
                  <p>
                    Pranav Talmale <br />
                    +91 1234567890 <br />
                    Mon - Sun, 10:00am-5:00pm
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
