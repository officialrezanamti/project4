import { useNavigate, useParams } from "react-router-dom";
import MyNavbar from "../../Component/MyNavbar/MyNavbar";
import "./Article.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Component/Footer/Footer";
import { FaRegEdit } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";




export default function Article({ time }) {
  let articleId = useParams().articleId;
  let [articleData, setArticleData] = useState({});

  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);

  const deletHandler = (id) =>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({

          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        axios.delete(`http://localhost:5000/user/${id}`);
        navigate ('/');
      }
    });




    
    
    

  }
  return (
    <>
      <MyNavbar />
      <div className="articlaPageContext">
        <div className="cardArticleContext">
          <img src={articleData.image} className="picArticleContext" />
          <h2 className="articleTitleContext">First Article Title</h2>
          <div className="detail">
            <p>
              <FaRegEdit style={{marginLeft : '4px'}} /> Writter : {articleData.writter}{" "}
            </p>
            <p>
              <IoIosTimer
                style={{ position: "relative", top: "4px", fontSize: "19px" }}
              />{" "}
              Time to read : {articleData.time}{" "}
            </p>
            <p>
              <BiCategoryAlt style={{ position: "relative", top: "4px", fontSize: "19px" }} /> Category : Ai
            </p>
          </div>
          <div className="deleteAndEdit">
            <button className="blue"> <MdEdit /> Edit Article</button>
            <button className="red" onClick={() => deletHandler(articleId)}> <FaTrash /> Delete Article</button>
          </div>
        </div>
        <div className="articleDescContext">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
            eum non asperiores, aut accusantium repellat dolorum saepe quidem
            atque possimus consequatur tenetur officiis sit perferendis minus
            nobis, eveniet explicabo. Quia porro dolores voluptates fuga a, in
            vitae laboriosam sit saepe commodi. At optio tempore dolorum.
            Voluptatibus, deserunt, perferendis iusto ipsum molestias, aut
            maxime aperiam adipisci voluptas vitae fugiat ducimus? Perferendis
            at veniam nihil sed consequatur aspernatur id harum dolorum illum
            laboriosam, corporis vitae cumque voluptates ex voluptatem voluptas
            tempora dolore quod iste tenetur et magnam sapiente deleniti?
            Voluptate, voluptas. Non neque velit quae, vitae repudiandae odit
            corporis inventore culpa minima minus deleniti soluta consequatur
            itaque ut ad sunt quaerat, architecto incidunt praesentium dolor
            distinctio modi quam. Porro, veniam beatae? Eos ratione reiciendis
            mollitia saepe excepturi tempore voluptates, alias officia? Natus
            assumenda earum, nihil quas unde corporis illum cumque quam repellat
            in? Et incidunt ab mollitia laboriosam, eveniet dolor odio. Itaque
            illum odio temporibus necessitatibus voluptates! Soluta a placeat
            quia quas, iusto repellendus tenetur, aliquid, animi vel vitae
            perspiciatis cum voluptate sed? Pariatur obcaecati debitis quo
            impedit optio minima laborum. Atque laborum iure animi cumque enim
            consectetur natus eveniet? Similique omnis doloribus delectus ab
            corrupti, accusamus veniam enim a ipsam quis iusto sequi voluptatem
            quasi necessitatibus, quam corporis et sunt. Enim voluptate et
            voluptates fugit unde praesentium dolore vero cumque iste? Hic
            aliquam perspiciatis eveniet vero. Itaque animi quis ab
            exercitationem nemo dignissimos aliquam, eos dolore, optio repellat
            consectetur officia? Laudantium quae animi nisi aliquam qui quidem
            explicabo quo eligendi minus nam, ut repellendus harum. Ab harum
            voluptas architecto cupiditate odio, nisi dicta fugiat
            exercitationem ad repellendus, excepturi laboriosam a. Commodi
            pariatur, fugit modi in corrupti aperiam, quam id doloribus aliquid
            inventore blanditiis fuga quibusdam rerum ducimus cum ipsa
            praesentium adipisci consequuntur quos illo nulla minima nemo!
            Culpa, recusandae aliquid! At obcaecati natus voluptates ab delectus
            distinctio voluptate. Officiis, odit nostrum voluptates et quas
            beatae, natus molestias eius quibusdam sint libero temporibus culpa
            accusamus ex, nam consequuntur voluptatibus veniam expedita. Quos
            ducimus porro, aperiam quasi nam officiis et modi repudiandae
            voluptates dolores odit dolorem aspernatur, voluptatum dolor
            laboriosam consequuntur! Rem itaque doloremque accusantium culpa ut
            molestiae dolores unde porro animi. Incidunt quae omnis quibusdam
            optio aliquam praesentium maxime magnam, laudantium eos. Inventore
            sapiente necessitatibus corrupti eum a. Quo placeat odio expedita
            esse reprehenderit ut recusandae vero eum dignissimos, nulla itaque?
            Error blanditiis laboriosam rerum consequuntur eligendi velit sint
            sit? Eos quidem saepe beatae, nulla atque vero maxime facere maiores
            doloremque, nisi sapiente omnis, alias eligendi. Fuga enim impedit
            animi atque. Odit, molestiae veniam in blanditiis neque consequatur
            quaerat, reprehenderit assumenda sit itaque voluptatem quisquam,
            atque minus dolores ducimus illum repellat labore laboriosam
            architecto totam aperiam possimus doloribus molestias. Omnis, quasi?
            Laboriosam aperiam natus, eligendi commodi sequi fuga temporibus quo
            possimus accusantium soluta praesentium numquam dolor provident,
            sint aliquid vero perspiciatis at dolore ullam! Laborum, adipisci.
            Reiciendis error quisquam quos dolore. Aspernatur est doloremque
            accusamus sed incidunt recusandae labore commodi distinctio
            laboriosam dolorem veniam tempore praesentium molestias, harum vitae
            ipsam atque saepe deleniti placeat, rem enim fugiat eveniet? Saepe,
            debitis omnis. Assumenda quod explicabo aliquam esse sapiente,
            doloremque molestias nulla laboriosam officiis autem quia veniam
            magni distinctio praesentium? Animi, sit suscipit. Sequi eum quasi
            quidem nesciunt distinctio ea aliquid. Doloremque, sint.
            Exercitationem inventore ea iure voluptatibus autem minus
            perferendis impedit nobis iusto, laborum vel ad consequatur qui
            recusandae minima quo sapiente suscipit officia sunt. Cumque
            mollitia laboriosam est eos ut officiis. Repudiandae sunt impedit in
            quod, nobis nulla! Quis placeat vitae perferendis, velit est
            voluptates ea a laudantium officiis consequuntur. Voluptates a
            consectetur nobis odio porro sint illo voluptatibus impedit aliquid.
            Explicabo quaerat officia cupiditate assumenda praesentium magnam ab
            dolorum saepe maiores, nesciunt voluptate, ut doloremque, ullam
            neque commodi facilis quasi? Animi iste doloremque obcaecati
            suscipit dolores nostrum nisi laboriosam maiores. Obcaecati mollitia
            esse, saepe harum eos amet quibusdam, quam nam voluptatibus soluta
            rerum omnis fuga repudiandae ab libero maiores dignissimos ratione
            voluptatem quisquam veniam sunt ducimus dolore, fugiat minima.
            Placeat. Odit, non nisi incidunt deserunt molestiae quas qui ea
            nesciunt est, optio adipisci voluptate voluptas! Autem deserunt
            eligendi, aut ex temporibus veniam accusamus dolorem illum quod
            tempora, quo praesentium ut? Vero magni, sit tempora alias,
            distinctio a consequatur recusandae accusantium doloremque
            perferendis iusto soluta aliquam temporibus voluptatum quibusdam
            assumenda veniam qui vitae accusamus incidunt? Nisi labore officia
            nostrum quas voluptas. Vero dolorem quam, rem voluptas sit aliquid
            corrupti, iure, non quo quia maiores minima ipsum modi hic ratione.
            Optio officia quam laudantium expedita est cupiditate labore aperiam
            cum soluta libero. Soluta nisi dolore dignissimos quae error quas,
            quia ut fuga ex laudantium veniam atque unde doloribus! Totam, nam
            ullam, natus architecto voluptatem quia, atque labore nulla corrupti
            sint explicabo consequuntur? Facere, recusandae deleniti laboriosam
            officia non nihil possimus doloribus atque! Hic id, natus eum harum
            deleniti voluptates quidem quasi? Dignissimos sunt architecto
            maiores eum sed qui aliquid fuga repellat explicabo! Labore,
            possimus similique officiis ipsum deleniti eveniet. Accusantium,
            delectus! Expedita quod a harum fuga numquam laborum! Mollitia quos
            quis corrupti adipisci iure at, libero, id illo odio unde aspernatur
            possimus. At laudantium aspernatur, cum consequuntur, culpa ducimus
            ipsam mollitia eveniet ut repudiandae ratione, error animi quidem
            vero. Nemo cumque eligendi sapiente placeat facilis vel? Doloremque
            iste in suscipit voluptates? Eveniet? Provident culpa, vitae,
            dolorum illo eligendi repellendus, recusandae earum natus incidunt
            consectetur quod aut reiciendis delectus impedit vel. Accusamus
            voluptas ab aperiam sed similique earum vero nulla reprehenderit
            eaque iusto! Praesentium, dicta aut! Reprehenderit, unde animi dicta
            id obcaecati dignissimos pariatur perspiciatis incidunt! Vero
            cupiditate libero nihil saepe eum ab alias similique repellat
            provident nisi veritatis, aperiam laboriosam quidem corrupti.
            Tenetur deserunt magnam, voluptate eaque quidem magni ab, rem fugit
            harum cumque possimus omnis mollitia dolores nulla beatae distinctio
            eius vero sapiente minus, quia eos quos ad dolorum. Ipsa, nulla.
            Consequuntur voluptate rem fugiat alias inventore assumenda ipsam
            minus sed iusto in, quod eos odio, beatae corporis cum, nobis unde
            at odit minima. Architecto temporibus assumenda hic, vel consequatur
            maxime. Voluptatum natus velit numquam veritatis ea perferendis
            debitis atque corporis, error odit fugiat, ipsa, consequuntur nemo
            quam tempora? Voluptatem qui eos molestias enim iusto magni,
            voluptatibus pariatur molestiae cum laudantium? Aliquid molestiae
            veritatis perspiciatis libero itaque quae, impedit accusantium nemo
            laborum fuga cum nihil dicta asperiores suscipit voluptate non
            soluta voluptates assumenda tenetur, ea laudantium nisi dolorem,
            voluptatibus possimus? Numquam? Magni voluptatum sint velit
            veritatis saepe eum praesentium cumque voluptates magnam commodi ut
            exercitationem pariatur debitis vero, sed atque nam accusantium,
            nulla ullam accusamus minus aliquid earum alias! Ab, magni.
            Voluptatem sequi dolorem aliquid delectus quae dignissimos
            voluptates ab officiis, quo sint deleniti eaque distinctio
            exercitationem! Temporibus blanditiis hic, aspernatur quasi ipsa
            excepturi architecto qui possimus ducimus accusantium vel
            cupiditate. Explicabo quibusdam nisi quod minus incidunt provident
            facilis id. Hic quasi repellendus corrupti? Tenetur, consequuntur
            libero laboriosam mollitia numquam architecto nemo vitae nihil ea,
            est, incidunt cupiditate explicabo voluptas corporis. Consectetur
            enim minima dolor facilis. Ab quam iusto qui molestias maxime
            voluptas quod deleniti rerum nam error explicabo nesciunt facilis,
            iure id, aut velit quas perspiciatis culpa tempora ullam aperiam?
            Nulla, officia nisi. Esse harum praesentium quibusdam explicabo quo
            cupiditate sit error, nobis ex modi vel magnam provident rerum non
            tenetur sequi! Minus animi odio laboriosam dicta laudantium, ab
            perspiciatis. Atque facere nobis aliquid quidem? Ullam consequuntur,
            beatae ipsam placeat ut odit corrupti. Magni aspernatur, provident
            nam unde velit eum nesciunt possimus repellat facere eveniet,
            expedita perspiciatis ratione iusto placeat. Reiciendis, odit
            dolore? Veritatis ipsa eligendi, voluptas cum incidunt molestias
            commodi et iusto sit ex harum numquam officia odit earum
            perspiciatis consectetur cumque! Fugit reiciendis beatae
            perspiciatis est aut architecto? Aperiam repellat magnam esse, ut
            tempore, enim voluptates temporibus voluptas velit, facilis
            doloribus amet ea voluptatem? Voluptates veritatis fuga quibusdam
            quia quidem nisi aliquid dignissimos ipsum quas! Laudantium,
            deleniti atque! Officiis minima sint velit voluptas alias possimus
            iste. Error ut repellat, delectus id sit sequi reiciendis minima
            tempore aspernatur cumque ducimus. Eveniet harum quos aliquam quod
            amet, et hic dolor. Suscipit modi aperiam enim explicabo tempora,
            minima corrupti maiores dolores numquam ipsam possimus nemo fugiat
            corporis, nihil earum illo! Hic rem incidunt fuga, maxime laudantium
            quisquam unde aut quibusdam minus. Reprehenderit libero dolore omnis
            fugit porro sint, minus, illo rem molestiae error ad aperiam
            recusandae harum voluptatem dolorem impedit officiis mollitia.
            Tempore obcaecati blanditiis nemo facilis reiciendis similique
            repellendus consectetur. Totam officiis magni debitis tenetur
            pariatur laborum reiciendis eos quia. Magnam soluta maiores eos
            eligendi in minus ut praesentium cupiditate porro? Sequi voluptates
            repudiandae aliquid pariatur ipsa cumque voluptate odio! Nobis
            quaerat tempora id quas, magnam doloribus. Itaque officiis sapiente
            nam minima distinctio. Alias, quam, architecto optio eum accusantium
            ducimus nostrum blanditiis dolores, quia nihil totam illo eius
            excepturi facere? Delectus, perspiciatis rerum enim neque sint
            quibusdam velit! Veniam, dolorum. Perferendis a sequi asperiores,
            aliquam dicta blanditiis tempore iure ab fugiat provident et,
            quisquam impedit autem, obcaecati eligendi placeat rem! Voluptatum
            cupiditate ad dolores voluptate eum alias nesciunt sed, perferendis
            nemo assumenda pariatur suscipit impedit dicta repellendus
            provident? Illo deserunt quos voluptate mollitia voluptas debitis
            deleniti sint officia maxime vel.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
