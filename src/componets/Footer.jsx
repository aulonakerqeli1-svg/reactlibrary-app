import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
          {/* Kolona 1 */}
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase">
              Rreth Librarisë
            </div>

            <Link to="#" className="block mt-5 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Historia jonë
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Misioni & Vizioni
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Stafi
            </Link>
          </div>

          {/* Kolona 2 */}
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase">
              Shërbimet
            </div>

            <Link to="#" className="block mt-5 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Huazimi i librave
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Lexim në vend
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Librat elektronikë
            </Link>
          </div>

          {/* Kolona 3 */}
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase">
              Kategoritë
            </div>

            <Link to="#" className="block mt-5 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Romanë
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Shkencë
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Histori
            </Link>
          </div>

          {/* Kolona 4 */}
          <div>
            <div className="text-xs font-medium text-gray-400 uppercase">
              Kontakti
            </div>

            <Link to="#" className="block mt-5 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Email
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Lokacioni
            </Link>
            <Link to="#" className="block mt-3 text-sm text-gray-500 dark:text-gray-300 hover:underline">
              Orari
            </Link>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Libraria. Të gjitha të drejtat e rezervuara.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {/* Social icons i ke OK – mund t’i lësh njësoj */}
            <Link to="#" className="mx-2 text-gray-400 hover:text-gray-500">FB</Link>
            <Link to="#" className="mx-2 text-gray-400 hover:text-gray-500">IG</Link>
            <Link to="#" className="mx-2 text-gray-400 hover:text-gray-500">GH</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
