import Container from "./Container";


export default function FAQSection() {


  return (
    <Container>
    <section className="py-20 ">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">FAQ</h2>
     <div className="space-y-4">

  <div tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
    <div className="collapse-title font-semibold">
      What is Artify?
    </div>
    <div className="collapse-content text-sm">
      <p>
        Artify is an online platform where users can explore, showcase, and manage digital artworks.
      </p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
    <div className="collapse-title font-semibold">
      How do I create an account?
    </div>
    <div className="collapse-content text-sm">
      <p>
        Click the "Sign Up" button in the top right corner and complete the registration process.
      </p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
    <div className="collapse-title font-semibold">
      Is Artify free to use?
    </div>
    <div className="collapse-content text-sm">
      <p>
        Yes, Artify is completely free for browsing and showcasing artworks.
      </p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
    <div className="collapse-title font-semibold">
      How can I upload an artwork?
    </div>
    <div className="collapse-content text-sm">
      <p>
        After logging in, go to your dashboard and use the Add Artwork option to upload your artwork.
      </p>
    </div>
  </div>

  <div tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
    <div className="collapse-title font-semibold">
      Can I edit or delete my artwork?
    </div>
    <div className="collapse-content text-sm">
      <p>
        Yes, you can edit or delete your own artworks anytime from your dashboard.
      </p>
    </div>
  </div>

</div>
    </section>
    </Container>
  );
}
 